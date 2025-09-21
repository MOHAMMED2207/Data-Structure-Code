# 📚 Data Structures

هذا المشروع يحتوي على أمثلة وشرح لأهم تراكيب البيانات (Data Structures)  
مع تحليل التعقيد الزمني (Time Complexity) لكل عملية أساسية.  

---

## 🔹 مقدمة
تراكيب البيانات (Data Structures) هي طريقة لتنظيم وتخزين البيانات بحيث يمكن استخدامها بكفاءة.  
اختيار الـ Data Structure المناسب يساعد على تحسين أداء البرنامج وحل المشكلات بفعالية.

---

## 🔹 أنواع الـ Data Structures
1. **Linear Data Structures**
   - Array
   - Linked List (Singly / Doubly)
   - Stack
   - Queue (Normal / Circular / Priority Queue)

2. **Non-Linear Data Structures**
   - Tree (Binary Tree, BST, Heap, AVL)
   - Graph (Directed / Undirected)

3. **Hash-based**
   - Hash Table / Hash Map / Set

---

## 🔹 شرح + أمثلة

### 1. Array
- تخزن العناصر في مواقع متجاورة في الذاكرة.
- الوصول لعناصرها سريع باستخدام الـ Index.

```js
let arr = [10, 20, 30];
arr.push(40);   // O(1)
console.log(arr[2]); // 30 (O(1))
