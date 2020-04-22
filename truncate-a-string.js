function truncateString(str, num) {
  if(str.length>num)
    {
      let arr=new Array();
      arr=str.slice(0,num);
      arr+="...";
      /*
      // Suppose in place of the above 2 lines, we were using 
      >> arr=str.slice(0,num);
      >> arr.push("...")
      
      Then we would be thrown a push is not a function error, as arr currently is of type string, and push/pop is a function of array.
      So we need to convert it to array before applying push()/pop() to it.
      We achieve this by performing the type-casting in the following manner 
      >> arr=[str.slice(0,num)] ; We do this by enclosing the RHS of arr in square brackets.
      Also note that the result of the following would be something like this :
                      ["some-selected-string", "..."] , and not a string.
          So for this we need to perform concatenation, and this technique is used for concatenation.
      */
      // console.log(arr)
      return arr;
    }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
