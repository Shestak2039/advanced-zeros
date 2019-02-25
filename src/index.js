module.exports = function getZerosCount(number, base) {
  let arrSimple = [];
  let k = 0;

	for (let i = 2; i <= base; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				k++;
			}
		}
		if (k === 0) {
			arrSimple.push(i)
		} else {
			k = 0;
		}
	}

	let baseSimple = [];
	let arr = [];

	for (let i = 0; i <= arrSimple.length; i++) {
		if (base === 1) break;
		for (let j = 0; ; j++) {
			if (base % arrSimple[i] == 0) {
				base /= arrSimple[i];
				arr.push(arrSimple[i]);
			} else {
				break;
			}
		}
		if (arr.length !== 0) {
			baseSimple.push(arr);
		}
		arr = [];
	}
	
	let arrSum = [];
	let sum = 0;
	let div = 1;

	for (let i = 0; i < baseSimple.length; i++) {
		div = 1;
		sum = 0;
		while (div < number) {
			div *= baseSimple[i][0];
			sum += Math.floor(number / div);
		}
		arrSum.push(sum);
	}
	for (let i = 0; i < arrSum.length; i++) {
		arrSum[i] = Math.floor(arrSum[i] / baseSimple[i].length);
	}

	let min = arrSum[0];
	
	for (let i = 0; i < arrSum.length; i++) {
		if (min > arrSum[i]) {
			min = arrSum[i];
		}
	}
	return min;
}