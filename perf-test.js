// SUMMARY OF RESULTS

// TOTAL: EMBER STORE: 551ms
// TOTAL: EMBER OBJECT: 28ms
// TOTAL: EMBER ARRAY: 110ms
// TOTAL: ARRAY PROXY: 164ms 



// Ember Store - load: 114ms
// Ember Store - find: 437ms

// Ember Object - load: 26ms
// Ember Object - find: 2ms

// Ember Array - load: 24ms
// Ember Array - find: 86ms


// ArrayProxy - load: 81ms
// ArrayProxy - find: 83ms

// Curiously, findProperty is slower in an ArrayProxy than a normal array
// Ember Array - find: 86ms
// Ember Array - find property: 86ms
// ArrayProxy - find: 83ms
// ArrayProxy - find PROPERTY: 253ms 


window.App = Ember.Application.create();
App.store = DS.Store.create({
      revision: 4
});

App.DSNode = DS.Model.extend({
        title:      DS.attr('string'),
        length:     DS.attr('number'),
        type:       DS.attr('string'),
        courseId:   DS.attr('number')
})

App.Node = Ember.Object.extend({})
App.nodesHash = Ember.Object.create()
App.nodesArray = Ember.A()
App.nodesArrayProxy = Ember.ArrayProxy.create({content: Ember.A()})
    
    
// EMBER DATA STORE
    
console.time('TOTAL: EMBER STORE')
console.time('Ember Store - load')
App.store.loadMany(App.DSNode, NODES)
console.timeEnd('Ember Store - load')    

console.time('Ember Store - find')
NODES.forEach(function(n){
    var nodeId = n.id
    App.DSNode.find(nodeId)
})
console.timeEnd('Ember Store - find')
console.timeEnd('TOTAL: EMBER STORE')    
 
    
// EMBER OBJECT
    

console.time('TOTAL: EMBER OBJECT')
console.time('Ember Object - load')
NODES.forEach(function(n){
    var node = App.Node.create(n)
    App.nodesHash[node.get('id')] = node
})
console.timeEnd('Ember Object - load')
        
console.time('Ember Object - find')
NODES.forEach(function(n){
    var nodeId = n.id
    App.nodesHash.get(nodeId)
})
console.timeEnd('Ember Object - find')
console.timeEnd('TOTAL: EMBER OBJECT')    
    
    
    
    
// EMBER ARRAY    
    
console.time('TOTAL: EMBER ARRAY')    
console.time('Ember Array - load')
NODES.forEach(function(n){
    var node = App.Node.create(n)
    App.nodesArray.push(node)
})
console.timeEnd('Ember Array - load')
    
console.time('Ember Array - find')
NODES.forEach(function(n){
    var nodeId = n.id
    App.nodesArray.find(function(n){ return n.get('id') == nodeId
    })
})
console.timeEnd('Ember Array - find')
console.timeEnd('TOTAL: EMBER ARRAY')    
    
    
    
    
// ARRAY PROXY    

console.time('TOTAL: ARRAY PROXY')    
console.time('ArrayProxy - load')
NODES.forEach(function(n){
    var node = App.Node.create(n)
    App.nodesArrayProxy.pushObject(node)
})
console.timeEnd('ArrayProxy - load')
   
console.time('ArrayProxy - find')
NODES.forEach(function(n){
    var nodeId = n.id
    App.nodesArrayProxy.get('content').find(function(n){ return n.get('id') == nodeId
    })
})
console.timeEnd('ArrayProxy - find')
console.timeEnd('TOTAL: ARRAY PROXY')    
   

console.time('Ember Array - find property')
NODES.forEach(function(n){
    var nodeId = n.id
    App.nodesArray.findProperty('id', nodeId)
})
console.timeEnd('Ember Array - find property')

console.time('ArrayProxy - find PROPERTY')
NODES.forEach(function(n){
    var nodeId = n.id
    App.nodesArrayProxy.findProperty('id', nodeId)
})
console.timeEnd('ArrayProxy - find PROPERTY')

