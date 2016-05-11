//question.1
var a="hello homework3";
console.log(a)
//question.2
function stringToInt(input)
{
	return parseInt(input);
}
//question.3
function maskNumber(input)
{
	var mask_number="";
	for(var i=0;i<11;i++)
	{
		if(i>=7)
		{
			mask_number+="*";
		}
		else
		{
			mask_number+=input[i];
		}
	}
	return mask_number;
}
//question.4
function getAverage(input_array)
{
	var index=0;
	var size=0;
	var sum=0;
	var avg;
	while(input_array[index]!=undefined)
	{
		sum+=input_array[index];
		size++;
		avg=sum/size;
		index++;
	}	
	return avg;
}
//question.5
function isMultipleSeven(input)
{
	if(input%7==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//question.6
function operation(op,val1,val2)
{
	switch (op)
	{
	case "add":
	 return val1+val2;
	 break;
    case "substract":
	 return val1-val2;
	 break;
	case "multiply":
	 return val1*val2;
	 break;
	case "divide":
	 return val1/val2;
	 break;
	default:
	 console.log("Not Supported");
	 break;
	}
}
//question.7
function triangleMtn(size)
{
	var result=""
	for(var i=0;i<size;i++)
	{
		for(var j=0;j<=i;j++)
		{
			result+="*";
		}
		console.log(result);
		result="";
	}
}