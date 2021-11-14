const form = document.querySelector("#f1") as HTMLFormElement;
let s1 = document.getElementById("s1") as HTMLSpanElement;
let s2 = document.getElementById("s2") as HTMLSpanElement;

class domestic{
  constructor(unit:number){
    if (unit > 0 && unit <= 100)
    {
          var x0 = 0.0;
          s1.innerHTML = ""+unit;
          s2.innerHTML = ""+x0;
     }
     if (unit>=101 && unit<=200)
     {
           var x3 = unit*1;
           var x1 =  (unit-100)*1.5;
           var x12=x1+250;
           var x6 = 50;
           var x7 = x12-x6;
           var x4 = 30;			
           var x8 = 10;
           var x2 = 250;
           var x0 = Math.ceil(x1+x4-x8);
           var x11=Math.abs(x0);
           s1.innerHTML = ""+unit;
           s2.innerHTML = ""+x11;
      }
                 
   if (unit>=201 && unit<=500)
   {
           var x3 = unit*1;
           var x1 = (unit-200)*3 + 500;
           var x6 = 50;
           var x7 = x1-x6;
           var x4 = 30;			
           var x8 = 0;
           var x2 = 250 ;
           var x0 = Math.ceil(x1+x4-x2-x6-x8);
           s1.innerHTML = ""+unit;
           s2.innerHTML = ""+x0;
   }
                   
   if (unit>500)
   {
           var x3 = unit*1;
           var x1 = (unit-500)*6.6+1730+250;
           var x6 = 0;
           var x7 = x1-x6;
           var x4 = 50;			
           var x8 = 0;
           var x2 = 250 ;
           var x0 = Math.ceil(x1+x4-x2-x6-x8);
           s1.innerHTML = ""+unit;
           s2.innerHTML = ""+x0;
    } 
  }
}

class commertial{
  constructor(unit:number,load:number){
    if (unit>0 && unit<=100)
    {
          var x3 = unit*1;
          var x1 = unit*5;
          var x6 = 0;
          var x7 = x1-x6;
          var x4 = load*140;			
          var x8 = 0;
          var x2 = (x1*0.05);
          var x0 =Math.ceil(x1+x4+x2);
          s1.innerHTML = ""+unit;
          s2.innerHTML = ""+x0;	
    }
    if (unit>=101)
    {
        var x3 = unit*1;
        var x5 = unit*0.1;
        var x1 = unit*8.05;
        var x6 = 0;
        var x7 = x1-x6;
        var x4 = load*140;			
        var x8 = 0;
        var x2 = (x1*0.05);
        var x0 = Math.ceil(x1+x4+x2);
        s1.innerHTML = ""+unit;
        s2.innerHTML = ""+x0;
    }
  }
}

form.onsubmit = () => {
  const formData = new FormData(form);

  const unit = parseInt(formData.get('unit1') as string);
  const tf = formData.get('tariff') as string;

      if (tf == 'Domestic')
      {
        let dom = new domestic(unit);
      }
      else if(tf == "Commercial")
      {
        const load = parseInt(formData.get('load') as string);
        let com = new commertial(unit,load);
      }
  return false;
};