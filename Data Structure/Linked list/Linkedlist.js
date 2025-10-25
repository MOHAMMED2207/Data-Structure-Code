// تعريف كلاس العقدة (Node)
class Node {
  constructor(data) {
    // مُنشئ الكلاس، يستقبل قيمة البيانات
    this.data = data; // يخزن البيانات في الخاصية data
    this.next = null; // يشير للعقدة التالية، ويبدأ بقيمة null
    // [data, next] = [data, null]; // طريقة بديلة لتعريف الخصائص
  }
}

// تعريف كلاس القائمة المرتبطة (LinkedList)
class LinkedList {
  constructor() {
    // مُنشئ الكلاس
    this.head = null; // رأس القائمة يبدأ بقيمة null (قائمة فارغة)
  }
  // دالة لإضافة عقدة في نهاية القائمة
  append(data) {
    const newNode = new Node(data); // إنشاء عقدة جديدة بالبيانات المطلوبة
    if (!this.head) {
      // إذا كانت القائمة فارغة
      this.head = newNode; // اجعل الرأس هو العقدة الجديدة
      newNode.next = null;
      return; // إنهاء الدالة
    }
    // find the last node
    let current = this.head; // متغير مؤقت يبدأ من الرأس
    while (current.next) {
      // طالما هناك عقدة تالية
      current = current.next; // انتقل للعقدة التالية
    }
    current.next = newNode; // ضع العقدة الجديدة في نهاية القائمة
  }

  // دالة لإضافة عقدة في بداية القائمة
  prepend(data) {
    const newNode = new Node(data); // إنشاء عقدة جديدة
    newNode.next = this.head; // اجعل العقدة الجديدة تشير للرأس الحالي
    this.head = newNode; // اجعل الرأس هو العقدة الجديدة
  }

  // دالة لحذف عقدة حسب القيمة
  delete(data) {
    if (!this.head) return; // إذا كانت القائمة فارغة، لا تفعل شيء
    if (this.head.data === data) {
      // إذا كانت العقدة الأولى هي المطلوبة
      this.head = this.head.next; // اجعل الرأس هو العقدة التالية
      return; // إنهاء الدالة
    }
    let current = this.head; // متغير مؤقت يبدأ من الرأس
    while (current.next && current.next.data !== data) {
      // البحث عن العقدة المطلوبة
      current = current.next; // انتقل للعقدة التالية
    }
    if (current.next) {
      // إذا وُجدت العقدة المطلوبة
      current.next = current.next.next; // احذفها بتجاوزها في الربط
    }
  }

  // دالة لطباعة عناصر القائمة
  print() {
    let current = this.head; // متغير يبدأ من الرأس
    let result = ""; // متغير لتجميع النص
    while (current) {
      // طالما هناك عقدة
      result += current.data + " -> "; // أضف البيانات للنص
      current = current.next; // انتقل للعقدة التالية
    }
    result += "null"; // نهاية القائمة
    console.log(result); // طباعة النتيجة
  }
}

// مثال للاستخدام:
const list = new LinkedList(); // إنشاء قائمة جديدة
list.append(10); // إضافة 10 في النهاية
list.append(20); // إضافة 20 في النهاية
// list.prepend(5); // إضافة 5 في البداية
list.print(); // طباعة القائمة: 5 -> 10 -> 20 -> null
// list.delete(10); // حذف العقدة التي تحتوي على 10
// list.print(); // طباعة القائمة: 5 -> 20 -> null
