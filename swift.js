/*#ссылки*/

//http://online.swiftplayground.run/

////////////////////////////////////////////////////////////////

/*#операторы*/

//Константы
let x = 1;

//Переменные
var x = 1;

//Операторы диапазона
0..<3
0...3

if 1...4 ~= b {} 	//проверка на принадлежность к диапозону

//заменяющий nil

let defaultName = "Steave"
var name: String? = nil

let myName = name ?? defaultName //присвоить name если там значение есть, если нет, то дефолт

//if

if x == 3 {
	x = 5
} else if x == 4 {}

//guard
func someFunc(a: Int, b: Int){

	guard a==b else {return} //если равно то идет выполнение дальше
}
//Прекращает работу блока кода, в котором был объявлен

for i in 1...5{
	guard i != 3 else {continue} //переход к следующей итерации
	print(i)
}

//switch
switch x {
	case 10:print(10)
	case 20:print(20)
	default: print(x)
}



////////////////////////////////////////////////////////////////

/*#типы данных*/

let x: Int = 1;
let boolVal: Bool = true;

let str: String = "Hello";

let char: Character = "A";
let y: Float = 1.25 // 6 знаков после запятой
let z: Double = 1.25 // 15 знаков после запятой

nil //отсутствие значений

////////////////////////////////////////////////////////////////

/*#строки*/

//интерполяция строки
let n = 5
let str = "Это строка номер: \(n)" //вставляет в строку переменную n

////////////////////////////////////////////////////////////////

/*#integer*/

int(123.123) //123 - откидывает часть после запятой

////////////////////////////////////////////////////////////////

/*#float*/

Float(123.121323232321123) // 123.1213

////////////////////////////////////////////////////////////////

/*#double*/

Double(123.121323232321123) // 123.1213232323211

////////////////////////////////////////////////////////////////

/*#функции*/

print(x) // вывести в консоль

func write(a: Int, b: Int) -> Int{	//указать тип возвращаемого значения
	print('привет');
	return a + b
}

write(3, b: 5);

////////////////////////////////////////////////////////////////

/*#циклы*/

//repeat while

var x = 0
repeat {
	x++
	print(x)

} while x<=2

//while

var y = 0
while y <= 2{
	y++
	print(y)
}

//for

for j=0; j<=3; j++ {
	print(j)
}

//for in

for i in 0...3{
	print(i)
}

////////////////////////////////////////////////////////////////

/*#массивы*/

let arrayOfInts = [1,2,3,4]

let arrayOfInts: [Int] = [1,2,3,4]

//создать пустой массив
let arrayOne = Array<Int>()
let arrayTwo = [Int]()
let arrayOfInts: [Int] = []

let array5 = [Int](repeating: 10, count: 6) //[10,10,10,10,10,10]

let array5[1...3] = [15] //[10,15,10,10]

//Количество элементов
array5.count // 4

//методы

array5.append(100) //[10,15,10,10,100]

array5.insert(100, at: 2) //[10,15,100,10,100]

array5.remove(at: 2) //100

array5.removeFirst() //10

array5.removeLast() //100

array5.removeFirst(n:2) //удалить первые 2

array5.removeLast(n:2) //удалить последние 2

array5.reverse() //перевернуть массив

////////////////////////////////////////////////////////////////

/*#словари*/

let dictionary = ["kia":140, "bmw":121, "ford":130]

//создание пустого

let dict = Dictionary<String, String>()
let dict2 = [String: String]()
let dict3: [String: String] = [:]

dictionary.count // 3

//Проверка на пустоту
dictionary.isEmpty	//false

let deleteVal = dictionary.updateValue(40, forKey: "ford") // 130

dictionary["ford"] = nil //удаляет значение

let deleteVal = dictionary.removeValue(forKey: "ford") // 130

//очистить словарь
deleteVal.removeAll() 
deleteVal = [:]

////////////////////////////////////////////////////////////////

/*#множества*/

let stringSet:Set<String> = ["kia","bmw","ford"]
let set3: Set = [1,2,3,4]

//создать пустой
let set1 = Set<String>()
let set2: Set<String> = []


set3.insert(5) // добавить значение

set3.isEmpty //false - проверка на пустоту

set3.count 

set3.remove(6) //удалить указанный элемент

set3.contains(1) // проверяет наличие значения

//создать массив из двух
let setFrom123: Set = [1,2,3]
let setFrom49: Set = [4,5,6,7,8,9]

let commonValueArray = setFrom123.union(setFrom49).sorted()

//отсортировать
setFrom49.sorted()

//пересечение
let commonValueSet = setFrom123.intersection(commonValueArray)

//различия
let notRepeated = setFrom123.symmetricDifferents(commonValueArray)

//выбрать элементы одного массива, которые не содержатся в другом
let substracted = setFrom123.subtracting(commonValueArray)