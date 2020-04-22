function truncateString(str, num) {
  if(str.length>num)
    {
      let arr=new Array();
      arr=str.slice(0,num);
      arr+="...";
      /*
      // Suppose in place of the above 2 lines, we were using 
      
      */
      // console.log(arr)
      return arr;
    }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
