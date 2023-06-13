const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    {
        //Minimum 8 karakter
        regex: /.{8,}/,
        index: 0
    }, { 
        //Minumum bir numara
        regex: /[0-9]/,
        index: 1
    }, { 
        //minumum bir küçük harf
        regex: /[a-z]/,
        index: 2
    }, { 
        //Minumum bir özel karakter
        regex: /[^A-Za-z0-9]/,
        index: 3
    }, { 
        //Minumum bir büyük harf
        regex: /[A-Z]/,
        index: 4
    }, 
];

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item
            .regex
            .test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Şifre gereksimleri karşılıyorsa iconu değiştiriyor
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem
                .classList
                .add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem
                .classList
                .remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    //şifre giriş türünü "password" ve "text" arasında değiştirin
    passwordInput.type = passwordInput.type === "password"
        ? "text"
        : "password";

    //parola giriş türüne göre göz simgesi sınıfını güncelleyin
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password"
        ? ""
        : "-slash"}`;
})