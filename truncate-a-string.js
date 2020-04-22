function truncateString(str, num) {
  if(str.length>num)
    {
      let arr=new Array();
      arr=[str.slice(0,num)];
      arr+="...";
      // console.log(arr)
      return arr;
    }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
