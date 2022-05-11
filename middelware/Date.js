//c'est quoi middelware
// ici client ----------->requette(give me info)"[backendmte3na]"ylhdem 3al node js " ena n3deha 3ala function tkhdem khidmtha w b3ed 
//traj3 res , dans notre cas on va l'appeler controler 



// ken ndhifou el midelware , el controler mezel mwjoud 
//twli requette tet3ada 3ala middelware , ely howa si el seyed hedha chy3mel , how c une function ema chy3mel bidhabet 

// yt7at fil widset , genralement nkhrjou 7aja 
// fi route securise n7otou midel bich nchoufou ken token valide , hwka tguolik kemel si nn arj3 


// what is next ? , 3adi lil ba3dou tou7lich ghady  tout fhmoha ki tchoufou el code 

const addDate =(req,res,next)=>{
const date= new Date();
///une prop lil request mt3na
req.date = date;
//une condition ely 7aseb el aw9at w les dates , yb9a el site ma7loul wela ytsaker 
//constante tkhdem 7aseb el swey3
const h= date.getHours();
if(!(h>=9 && h<=14)){
    return res.send("sakerna el ma3mel ")
}else{next() }

}
module.exports={addDate}