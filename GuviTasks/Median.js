
	var getMedian=function (ar1, ar2, n)
	{
	let j = 0;
	let i = n - 1;
	while (ar1[i] > ar2[j] && j < n && i > -1)
	{
		let temp = ar1[i];
		ar1[i] = ar2[j];
		ar2[j] = temp;
		i--; j++;
	}
	ar1.sort(function(a, b){return a - b});
	ar2.sort(function(a, b){return a - b});
	let result= parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    console.log(result);
	}
	

	let n1 = 5;
	let n2 = 5;
	
    getMedian([ 1, 12, 15, 26, 38 ],[ 2, 13, 17, 30, 45 ],5);
