data calling 
data sending 
data delete , edit 
get post put delete

switch replaced with routes
component replaced by element
exact removed
{home}wrong--------{home/}

obj{
name:"ali",
age="18"
}

usehistory replaced by usenavigate
usenavigate import form react-dom
const navigate = useNavigate()
navigate("contact",obj) (obj is data sent) if not using / here use / (/about) at router.js 

if we are replaceing route as seen below (replace:true)we will pass data trough this method 
navigate("contact",{state:obj})

index  before path to set default screen
example:
index path="/home" element={<home/>}


uselocation() it is introduced
example:
const location = uselocation()
console.log(location.state)

to get :id in link we use useParam

history.replace -------> {replace: true} its replaces the path
example:
navigate("contact",{replace: true}) it will replace current pathlink but
navigate("contact") will not replace the current pathlink

****important***

we used to create nested routing for nested pages
previosly we were handling customly
example:
for dashboard in profile we used to create /profile/dashboard
{video taken 9 nov}
***************

redirect is replaced 


how to link the pages to navbar
<ul>
<li>

<navlink to='/' > home </navlink> (this is the link for navbar <link> is to be used allover the page)

</li>
</ul>

activeClassName (used to style active link) we will give className={(routeStatus)=>{
if(routeStatus.isActive == true){
return "active";
  } 
} 
isActive property of className which is bydefault false  

^ this is replaced by className={(routeStatus)=>{routeStatus.isActive? "active" :" "}

(learn active in css must )

**********************************************************************
how is api fetched?

DATA CALLING:

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
this brings stingified form of data

DATA SENDING:

etch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json()) //WE CAN WRITE ANYTHING BECAUSE ITS AN SIMPLE ARROW FUNCTION 
example:
.then((e) => e.json())

  .then((json) => console.log(json));

WE GET:
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}

DATA EDIT:
{{{{ method: 'PUT', baki sara same rahega as SENDING }}}}}}}}, 
