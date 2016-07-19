function validMail() {
    var UserMail  = document.getElementById("InputMail").value;
    var MailDomain = UserMail.substring(UserMail.lastIndexOf("@") +1);
    var DomainList =  ["yahoo.com", "yahoo.com.br", "gmail.com", "gmail.com.br", "hotmail.com", "hotmail.com.br"];
    var FinalResult = DomainList.indexOf(MailDomain);

    if (FinalResult >= 0) {
        alert('Por favor, preencha o campo com um e-mail corporativo');
        InputMail.focus();
        return false;
    } else {
        alert('O seu e-mail ' + UserMail + ' foi cadastrado com sucesso');
        return true;
    }
}