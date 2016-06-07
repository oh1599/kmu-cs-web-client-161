function answer_1() 
{
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}
function answer_2()
{
	document.getElementById("q2-answer").innerHTML="1.DOM을 사용함으로 html 파일에 직접 변경,제거,추가 할수있다.<br>2.DOM을 사용함으로 그 페이지에 css효과를 줄수있다.";
}
function answer_3()
{
	var t=document.getElementsByClassName("q34-answer");
	t[0].innerHTML="<p>1.parent node:한 노드의 바로 윗 단계에 있는 상위 노드</p><p>2.child node:한 노드의 바로 한 단계 밑에 있는 하위 노드들의 집합</p><p>3.sibling node:같은 부모 노드를 두고 있는 같은 level의 노드들 간의 관계</p><p>4.descendant node: 부모 노드 에서 자식 노드로 순차적으로 내려올때 도달 가능한 노드들의 집합</p><p>5.ancestor node:자식 노드 에서 부모 노드로 순자적으로 올라갈때 도달 가능한 노드들의 집합</p>";
}
function answer_4()
{
	var t=document.getElementsByClassName("q34-answer");
	t[1].innerHTML="<p>1.document.getElementById():id태그의 해당하는 attribute이름이 있는 HTML 문장을 리턴해준다.</p><p>2.document.getElementsByClassName():class태그의 해당하는 attribute이름이 있는 HTML 문장들을 리턴해준다. 해당하는 attribute이름이 여러가지일 경우 배열을 이용해 접근 가능하다.</p><p>3.document.getElementsByName():input태그에 해당하는 attribute이름이 있는 HTML 문장들을 리턴해준다. 해당하는 attribute이름이 여러가지일 경우 배열을 이용해 접근 가능하다. </p><p>4.document.getElementsByTagName():해당하는 tag의 element가 있는 HTML 문장들을 리턴해준다. 해당하는 tag의 element가 여러가지일 경우 배열을 이용해 접근 가능하다.</p>";
}

$('a').click(function () 
{
      $(this).text("Answer5");     
});

$('.item').click(function ()
{
      $(this).attr('style','font-size:3em;');      
});

$('div.demo').dblclick(function()
{
      $(this).attr('style','color:blue;');
});