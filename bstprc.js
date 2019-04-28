/*#сортировка*/

let unsortedArr = [3, 6, 1, 0, 4]
let sortedArr = unsortedArr.sorted {
	(num1: Int, num2: Int) -> Bool in
	return num1 > num2
}

/*#проверка на четность*/

var isEven: Bool {
		return self % 2 == 0 ? true : false
	}

	/////////////в новом
	return self.isMultiple(of: 2)