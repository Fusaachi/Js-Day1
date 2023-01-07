function Exercice2(){
    let firstName = "Pauline"
    let lastName = "Giroux"
    let city = "Limay"
    document.querySelector("#lastName").value = lastName
    document.querySelector("#firstName").value = firstName
    document.querySelector("#city").value = city
    }
    
    function Ex2(){
        let firstName = "Pauline"
        let lastName = "Giroux"
        let city = "Limay"
    
        selectIdValue("#lastName",lastName)
        selectIdValue("#firstName",firstName)
        selectIdValue("#city",city)
    }
    
    function selectIdValue(id, variable){
        document.querySelector(id).value = variable
    }

    Exercice2()
    Ex2()