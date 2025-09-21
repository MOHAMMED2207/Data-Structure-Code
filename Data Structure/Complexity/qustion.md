تمام ✅ خليني أديك **أهم أسئلة الانترفيو الخاصة بالـ Time & Space Complexity** مع إجاباتها النموذجية 👇

---

### 🔹 **أسئلة عامة عن الـ Complexity**

1. **What is Big-O notation?**

   - **الإجابة:** Big-O notation بتوصف **أعلى معدل نمو** لوقت التنفيذ أو الذاكرة لما حجم البيانات (n) يزيد.
   - مثال: `O(n)` معناها الزمن بيزيد خطيًا مع حجم الإدخال.

---

2. **What is the difference between O(1), O(n), and O(log n)?**

   - **O(1):** ثابت، مهما كان حجم الإدخال (زي الوصول لعنصر في Array بالـ index).
   - **O(n):** خطي، الزمن بيزيد بزيادة العناصر (زي البحث الخطي).
   - **O(log n):** لوغاريتمي، الحجم بيقل للنص كل خطوة (زي الـ Binary Search).

---

3. **What’s the time complexity of searching in an array vs. a binary search tree?**

   - **Array:**

     - Linear Search → `O(n)`
     - Binary Search (sorted) → `O(log n)`

   - **BST (balanced):** `O(log n)`
   - **BST (unbalanced):** `O(n)` في أسوأ الحالات.

---

4. **What is the difference between best case, worst case, and average case complexities?**

   - **Best Case:** أقل وقت ممكن (مثلاً البحث عن عنصر موجود في أول array → `O(1)`).
   - **Worst Case:** أكبر وقت ممكن (عنصر مش موجود → `O(n)`).
   - **Average Case:** المتوقع في معظم الحالات (مثلاً نص العناصر).

---

### 🔹 **أسئلة Sorting Algorithms**

5. **What is the time complexity of Bubble Sort, Merge Sort, and Quick Sort?**

   - **Bubble Sort:**

     - Worst & Average: `O(n²)`
     - Best: `O(n)` (لو array sorted).

   - **Merge Sort:**

     - Always: `O(n log n)`
     - Space: `O(n)` (عشان بيستخدم Arrays إضافية).

   - **Quick Sort:**

     - Best & Average: `O(n log n)`
     - Worst: `O(n²)` (لو البايفوت اختار غلط).
     - Space: `O(log n)` (recursion).

---

6. **Why is Merge Sort better than Bubble Sort?**

   - Merge Sort أسرع (`O(n log n)` vs. `O(n²)`).
   - Bubble Sort كويس للتعليم بس مش عملي.
   - Merge Sort دايمًا ثابت حتى في الـ worst case.

---

### 🔹 **أسئلة عن الـ Space Complexity**

7. **What’s the space complexity of recursive algorithms like Merge Sort?**

   - Merge Sort: `O(n)` للـ extra arrays.
   - Quick Sort: `O(log n)` للـ recursion stack.

---

### 🔹 **أسئلة تطبيقية**

8. **If you have to find the maximum element in an array, what’s the complexity?**

   - لازم نمر على كل العناصر → `O(n)`.

---

9. **If you use Binary Search on a sorted array of size n, how many steps maximum?**

   - `O(log n)` steps.
   - مثلًا لو عندك `n = 1024` → أقصى خطوات ≈ `log₂(1024) = 10`.

---

10. **If you have a nested loop, what’s the complexity?**

- مثال:

  ```js
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  ```

  - Complexity = `O(n²)`.

---

تحب أعملك **قائمة مختصرة فيها كل الـ Sorting Algorithms + تعقيدها (Time & Space)** عشان تحفظها زي جدول صغير للانترفيو؟
