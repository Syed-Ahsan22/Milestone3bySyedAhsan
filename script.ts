document.getElementById("resumeForm")?.addEventListener('submit',function(event){
    event.preventDefault();

    const profilePicture = document.getElementById('profilePicture')as HTMLInputElement;
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const phoneElement = document.getElementById('phone')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const exprienceElement = document.getElementById('exprience')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;

   if (profilePicture && nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillsElement){
   
   const name =nameElement.value;
   const email =emailElement.value;
   const phone = phoneElement.value;
   const education = educationElement.value ;
   const exprience = exprienceElement. value ;
   const skills =skillsElement .value;
   
   
    const resumeOutput = `
    <h2>Resume</>
    <p><strong>Name</strong> ${name} </p>
    <p><strong>Email</strong> ${email} </p>
    <p><strong>Phone</strong> ${phone} </p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Exprience</h3>
    <p>${exprience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById ('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement . innerHTML = resumeOutput
    }
    else {
        console.error ('The resume output element are missing please try again')
    }
   }else{
    console.error('oops one more output element are missing')
   }
})