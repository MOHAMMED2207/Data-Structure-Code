تمام 👌 خلينا نرتبها في جدولين سهلين للحفظ:

---

## 🔹 **BST (Binary Search Tree) Operations**

| العملية | Balanced BST | Unbalanced BST |
| ------- | ------------ | -------------- |
| Search  | `O(log n)`   | `O(n)`         |
| Insert  | `O(log n)`   | `O(n)`         |
| Delete  | `O(log n)`   | `O(n)`         |

💡 السبب: في الـ **balanced tree** (زي AVL أو Red-Black Tree) العمق ≈ `log n`.
لكن لو الـ tree مش متوازنة (مثلاً دخلت عناصر sorted) هتبقى شبه Linked List → `O(n)`.

---

## 🔹 **Sorting Algorithms Complexities**

| Algorithm          | Best Case    | Average Case | Worst Case   | Space Complexity |
| ------------------ | ------------ | ------------ | ------------ | ---------------- |
| **Bubble Sort**    | `O(n)`       | `O(n²)`      | `O(n²)`      | `O(1)`           |
| **Insertion Sort** | `O(n)`       | `O(n²)`      | `O(n²)`      | `O(1)`           |
| **Selection Sort** | `O(n²)`      | `O(n²)`      | `O(n²)`      | `O(1)`           |
| **Merge Sort**     | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(n)`           |
| **Quick Sort**     | `O(n log n)` | `O(n log n)` | `O(n²)`      | `O(log n)`       |
| **Heap Sort**      | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(1)`           |
| **Counting Sort**  | `O(n + k)`   | `O(n + k)`   | `O(n + k)`   | `O(k)`           |
| **Radix Sort**     | `O(nk)`      | `O(nk)`      | `O(nk)`      | `O(n + k)`       |

---

💡 **نصائح للحفظ في الانترفيو:**

* أي **Comparison Sort** (يقارن عناصر) الحد الأدنى له = `O(n log n)`.
* الخوارزميات البسيطة (Bubble, Selection, Insertion) → غالبًا `O(n²)`.
* الـ **Divide & Conquer** زي Merge و Quick → `O(n log n)`.
* الـ **Counting / Radix** (مش مبنية على comparison) ممكن تنزل لأسرع من `O(n log n)`.

---

تحب أديك **أمثلة عملية بالكود** (JS أو Python) توضح ليه مثلًا Bubble بطيء و Merge أسرع، ولا تفضل الجدول ده كفاية للحفظ؟
