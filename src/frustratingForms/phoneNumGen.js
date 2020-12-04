

    var [phoneNumber,setPhoneNumber]=useState('');

const phoneNumGenerator=()=>{
    var number="";
    for (var i=0;i<10;i++){
        var digit=Math.floor((Math.random()*10));
        number+=digit;
    }
    const areaCode=number[0]+number[1]+number[2];
    const firstDigitSet=number[3]+number[4]+number[5];
    const secondDigitSet=number[6]+number[7]+number[8]+number[9];
    number="("+areaCode+") "+firstDigitSet+"-"+secondDigitSet;
    return number;
}

const changePhoneNumber=()=>{
    const newNumber=phoneNumGenerator();
    setPhoneNumber(newNumber);
}