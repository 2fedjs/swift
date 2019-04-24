/*#сортировка*/

let unsortedArr = [3, 6, 1, 0, 4]
let sortedArr = unsortedArr.sorted {
	(num1: Int, num2: Int) -> Bool in
	return num1 > num2
}