import {navbarr} from "../components/navbar.js"

const navbar=document.getElementById("navbar");
navbar.innerHTML=navbarr()


/// go for login

let goforlogin=document.getElementById("loginbutton");

loginbutton.onclick=()=>{

    window.location.href="./login.html"
}


// go for cart section 

let goforcart= document.getElementById("cartbutton");

goforcart.onclick=()=>{

    window.location.href="./cart.html"
}




const api="http://localhost:8080"

const token= localStorage.getItem("mykart_token")

//console.log("token",token)
//http://localhost:8080/product/allproduct

///////////////// get allproduct ///////////////////////

const get_cart_product=async()=>{

    

    try {

        const res=await fetch(`${api}/cart/allcart`,{
            method:"GET",
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${token}`
                
            }
        })

         let result=await res.json()
        result=result.data
         console.log("result",result)

         appendproduct(result)
        
    } catch (error) {
        console.log(error)
    }
}


get_cart_product()

const container=document.getElementById("products")

const appendproduct=(res)=>{

   container.innerText="";

    res.forEach((el)=>{

        let productdiv=document.createElement("div")

        ///
        let leftdiv=document.createElement("div")

        let prodimg=document.createElement("img");
        prodimg.src=el.productID.image;

        leftdiv.append(prodimg);
        ///

        ////

        let rightdiv=document.createElement("div")

        let pdrname=document.createElement("h2")
        pdrname.innerText=el.productID.name
        let pdrprice=document.createElement("h2")
        pdrprice.innerText="Total price : "+ el.total_price;
        let pdrquantity=document.createElement("select")
        pdrquantity.innerHTML=option()
        pdrquantity.value=el.quantity

        pdrquantity.onchange=(e)=>{

            let newq=e.target.value

            updatequantity(el,newq)
        }

        
        let pdrdelete=document.createElement("button")
        pdrdelete.innerText="DELETE"
        pdrdelete.onclick=()=>{

            deletecart(el)
        }

        rightdiv.append(pdrname,pdrprice,pdrquantity,pdrdelete)

        ////
        productdiv.append(leftdiv,rightdiv)
        container.append(productdiv)


        function option(){
            return `
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            `
        }

    //     container.innerHTML=`

    //     <div>
    //     <div>
    //         <img src=${el.productID.image} alt="product">
    //     </div>
    //     <div>
    //         <h2>${el.productID.name}</h2>
    //         <h2>total price : ${el.total_price}</h2>
            
    //         <select value=${el.quantity} name="quantity" id="quantity">
    //             <option value="1">1</option>
    //             <option value="2">2</option>
    //             <option value="3">3</option>
    //             <option value="4">4</option>
    //             <option value="5">5</option>
    //         </select>

    //         <button class="delete">delete</button>
    //     </div>
        
    // </div>
        
    //     `
    })
}



/// update quantity

function updatequantity(el,newq){

    console.log("hello",newq)
}



/// delete cart

function deletecart(el){

    console.log("helloddd")
}