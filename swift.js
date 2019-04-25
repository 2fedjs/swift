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
	guard i != 3 else {continue} //переход к следующей итерации, также возможно break
	print(i)
}

//switch
switch x {
	case 10:print(10)
	case 20:print(20)
	default: print(x)
}

switch x {
	case 10,20:print(10)
	fallthrough			//провалиться в следующий case
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

//опционал

var fuel: Int? //nil, вопрос указывает на то, что переменная опциональная
fuel = 20
print("\(fuel!) liters") //nil liters , ! - убирает слово Optional
//! - принудительное извлечение из переменной, будет ошибка при nil

//Вывести значение если оно не равно nil
if let availableFuel = fuel{
	print("\(availableFuel) liters") 
} else {
	print("no fuel data") //значение при nil
}
//убирает необходимость в восклицательном знаке

//кортежи

let boy = (5, "Vasya")
boy.1 // Vasua

let greenP = (color: "red", length: 26, weight: 4)
greenP.color //red

let (gC, gL, gW) = greenP

let (num1, num2, num3) = (1,2,3)

//псевдонимы типов

typealias Meter = Int
let length: Meter = 50

typealias DictionaryType = [String, Int]
var dictionary: DictionaryType = [:]
dictionary["Ford"] = 123

////////////////////////////////////////////////////////////////

/*#строки*/

//интерполяция строки
let n = 5
let str = "Это строка номер: \(n)" //вставляет в строку переменную n

let array = newFName.components(separatedBy: " ") // разбить через пробел в массив

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

func write(){	
	print('привет')
}

func write(a: Int, b: Int) -> Int{	//указать тип возвращаемого значения
	print('привет')
	return a + b
}
write(a: 3, b: 5)

func write() -> () { 	//ничего не возвращает, можно -> Void

}

func write(a: Int){    //указать тип возвращаемого значения
 var  a = a
    a += 1
}

//переменное количество параметров

func write(ofInt int: Int...) -> Int{    	//внешнее и внутреннее имя
 var sum = 0

 for i in int{
 	sum+=i
 }
 return sum
}
write(ofInt: 1,2,3,4,5)

func write(_ a: Int) -> Int{    //опустить имя параметра
    var a = a
    return 10*a
}
write(2)

//вернуть функцию
func foo(miss: Bool) -> ((Int)->Int){

	func missUp(input: Int) -> Int {return input + 1}
	func missDown(input: Int) -> Int {return input - 1}
	return miss ? missUp : missDown
}
foo(miss:true)(9)

//closures

let closure = {
    print("привет")
}
func repeatThree(_ closure: () -> ()){
    for _ in 0...2{
        closure();
    }
}
repeatThree(closure)

//или

func repeatThree(closure: () -> ()){
    for _ in 0...2{
        closure();
    }
}
repeatThree(closure: {
	() -> () in  		//явно указать тип клоужера
    print("привет")
})

repeatThree {
    () -> () in          //явно указать тип клоужера
    print("привет")
}

let unsortedArr = [3, 6, 1, 0, 4]
let sortedArr = unsortedArr.sorted {
	(num1: Int, num2: Int) -> Bool in
	return num1 > num2
}

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

for i in array{
	print(i)
}

for i in stride(from: 0, through: 10, by: 5){	//включительно 10
	print(i)
}

for i in stride(from: 0, to: 10, by: 5){	//не включая 10
	print(i)
}

for char in string{
	print(i)
}

for (name, y) in dictionary{
    print(name , y)
}

for (name, y) in array.enumerated(){
    print(name , y)
}



////////////////////////////////////////////////////////////////

/*#массивы*/

let arrayOfInts = [1,2,3,4]

let arrayOfInts: [Int] = [1,2,3,4]

var array = [Class]()

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

array.enumerated() //предотсавляет массив в перечисленном виде

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

//создать пустое
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

////////////////////////////////////////////////////////////////

/*#перечисления*/

//значения должны быть уникальны
enum Movement: Int {
	case forward = 23
	case backward = 25
	case left = 35
	case right = 43
}

let moveDir = Movement.forward.rawValue

enum Device {
    case iPhone, iPad
    
    var year: Int{
        switch self{
        case .iPhone: return 2007
        case .iPad: return 2010
        }
    }
}

let moveDir = Device.iPad.year


enum Device {
    case iPhone, iPad(color: String)
    
    var year: Int{
        switch self{
        case .iPhone: return 2007
            case .iPad(let color) where color == "black": return 2020
        case .iPad: return 2010
        
        }
    }
}

let moveDir = Device.iPad(color: "black").year


enum Character{
	enum Weapon: Int {
		case: sword = 4
		case: wand = 1

		var damage: Int{
			return rawValue * 10
		}
	}

	enum CaracterType {
		case knight
		case mage
	}
}
let charWeap = Character.Weapon.sword.damage	//40


//включения case

inderect enum Lunch{
	case salad
	case soup
	case meal(Lunch, Lunch) 	//включить оба
}
let myLunch = Lunch.meal(.salad, .soup)

////////////////////////////////////////////////////////////////

/*#объекты*/

//классы

class Human {
	var name = "Ivan"
	var age: Int? = 30
	var hair = true

	func description() -> String {

		return "Hello ! My name is \(name) and I'm \(age!) years old"
	}

	func description1() -> String {
        guard let hAge = age else{
            return "Hello ! My name is \(name)"
        }
           return "Hello ! My name is \(name) and I'm \(hAge) years old"
    }
}

//вычисляемые свойства

class Rectangula{
    let height: Int
    let width: Int
    let depth: Int
    
    var volume: Int{
       return height * width * depth
    }
    
    init(height: Int, width: Int, depth: Int){
        self.height = height
        self.width = width
        self.depth = depth
    }
}

let rect = Rectangula(height: 6, width: 6, depth: 6)
rect.volume


class Rectangula{
    var name: String
    var sName: String
    
    var fName: String{
        get{
            return name + " " + sName
        }
        
        set(newFName) {
            let array = newFName.components(separatedBy: " ")
            //перезаписываем свойства
            name = array[0]
            sName = array[1]
        }
    }
    
    init(name: String, sName: String){
        self.name = name
        self.sName = sName
    }
}

let rect = Rectangula(name:"XXX", sName: "YYY")
rect.fName = "hbdhb jdsbcj"
rect.name

//свойства объекта

class Human {
	var name = "Ivan"
	var age: Int? = 30
	class var hair: Bool {return true}			//записать свойство в объект

	func description() -> String {

		return "Hello ! My name is \(name) and I'm \(age!) years old" + Human.hair		//обращение к свойству
	}
}

//наблюдатели свойств

class SecretLabEmp {
    var accessLevel = 0 {
        willSet{
            print("new boss is about")
            print("new access level \(newValue)")
        }
        
        didSet{
            accessDB = accessLevel > 0 ? true : false
            print("last time i had \(oldValue)")
        }
    }
    
    var accessDB = false
}

let empl1 = SecretLabEmp()

empl1.accessLevel
empl1.accessDB

empl1.accessLevel = 2
empl1.accessDB

//ленивые свойства

//не инициализируется до обращения к нему
class Proc{
	lazy var smalData = smData()	//по умолчанию возвращает nil
}
//в свойствах не отображается но при обращении отработает

let pr = Proc()
pr.smalData

//экземпляр класса

let man1 = Human()
let man2 = Human()

var array = [Human]()
array.append(man1)
array.append(man2)

//Инициализация

//если значения по умолчаниюне заданы, их нужно проинициализировать в классе
class Human {
	var name
	var age: Int? = 30
	var hair

	init(){
		name= "Vasya"
		hair = true
	}

	init(name: String, age: Int?, hair: bool){
		self.name= name 						//self ссылается на свойство с таким же именем, при другом имени можно не указывать
		self.age = age
		self.hair = hair
	}
}

//Наследование

final class Child: Human{
	var toy = "Horse"
	override func sayHi() -> String{			//переопеределить метод
		let origText = super.sayHi()			//обращение к свойству родителя
	}

	final func sayHi() -> String{			//переопределение метода запрещено
		let origText = super.sayHi()			
	}

	init(toy:String, name:String){
		self.toy = toy
		super.init(name:name) 		
	}
}

////////////////////////////////////////////////////////////////

/*#уровни доступа*/

class Human {
	var name
	var age: Int? = 30
private	var hair		//разрешает использование только в этом классе

	init(){
		name= "Vasya"
		hair = true
	}

}