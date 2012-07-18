# SUMMARY OF RESULTS

* Total: Ember Store: 551ms
* Total: Ember Object: 28ms
* Total: Ember Array: 110ms
* Total: Array Proxy: 164ms 


**Ember Store** 

* Ember Store - load: 114ms
* Ember Store - find: 437ms

**Ember Object** 

* Ember Object - load: 26ms
* Ember Object - find: 2ms

**Ember Array** 

* Ember Array - load: 24ms
* Ember Array - find: 86ms

**Ember ArrayProxy** 

* ArrayProxy - load: 81ms
* ArrayProxy - find: 83ms


**Curiously, findProperty is slower in an ArrayProxy than a normal array**

* Ember Array - find: 86ms
* Ember Array - find property: 86ms
* ArrayProxy - find: 83ms
* ArrayProxy - find PROPERTY: 253ms 

