const btn = document.getElementById("btn");
const result = document.getElementById("result");
const bar = document.getElementById("bar");
const text = document.getElementById("text");

var loaded = 0;

var stop = 0;
var stopPosition = 40;
var stopCounter = 15;

btn.addEventListener("click", Click);
result.addEventListener("click", Close);

function Click()
{
	if(loaded == 0)
	{
		if(text.value != "")
		{
			setTimeout(UpdateLoading, 40);
		}
		else
		{
			alert("Введите текст!");
		}
	}
	else
	{
		alert("Текст уже анализируется!");
	}
	
}

function Close()
{
	result.className = "modal modal_hidden";
	loaded = 0;
	stop = 0;
} 

function UpdateLoading()
{
	if(loaded != stopPosition && loaded != stopPosition * 2)
	{
		loaded++;
	}
	else
	{
		stop++;

		if(stop >= stopCounter)
		{
			loaded += 5;
			stop = 0;
		}
	}

	bar.setAttribute("style", "width: " + loaded + "%;");

	if(loaded < 100)
	{
		setTimeout(UpdateLoading, 40);
	}
	else
	{
		result.className = "modal";
	}
	
}