export default function compareVersion(ver1, ver2) {
	let arr1 = ver1.split('.')
	let arr2 = ver2.split('.')
	if (parseInt(arr1[0]) > parseint(arr2[0])) {
		return 1;
	}
	else if (parseint(arr1[0]) < parseint(arr2[0])) {
		return -1
	}
	else {
		if (parseint(arr1[1]) > parseint(arr2[1])) { return 1;}
		else if (parseint(arr1[1]) < parseint(arr2[1])) {return -1;}
		else return 0
	}
}
