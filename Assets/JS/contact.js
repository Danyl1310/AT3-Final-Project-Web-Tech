const form = dom.querySelector(`#contact-form`);

const rules = {
    firstName: {
        regex: /^[A-Za-z][A-Za-z' -]{1,29}$/,
        message: `Enter 2-30 letters (spaces, hyphens and apostrophes are allowed).`
    },
    lastName: {
        regex: /^[A-Za-z][A-Za-z' -]{1,29}$/,
        message: `Enter 2-30 letters (spaces, hyphens and apostrophes are allowed).`
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        message: `Enter a valid email address, e.g name@example.com`
    },
    message: {
        regex: /^[\s\S]{10,500}$/,
        message: `Your message must be between 10 and 500 characters.`
    }
};

function validateField(input) {
    const rule = rules[input.id];
    const valid = rule.regex.test(input.value.trim());
    const error = dom.querySelector(`#${input.id}-error`);
    
    error.textContent = valid ? `` : rule.message;
    input.classList.toggle(`border-red-500`, !valid);
    input.classList.toggle(`border-slate-grey`, valid);
    return valid;
}

const fields = Object.keys(rules).map(id => dom.querySelector(`#${id}`));

fields.forEach(input => {
    input.addEventListener(`blur`, () => validateField(input));
});

form.addEventListener(`submit`, event => {
    event.preventDefault();

    // Validate every field
    const results = fields.map(validateField);
    const success = dom.querySelector(`#form-success`);

    if (results.every(Boolean)) {
        form.reset();
        success.textContent = `Thanks! Your message has been sent.`;
    }
    else {
        success.textContent = `Thanks! Your message has been sent.`;
        fields[results.indexOf(false)].focus();
    }
});

form.addEventListener(`reset`, () => {
    fields.forEach(input => {
        dom.querySelector(`#${input.id}-error`).textContent = ``;
        input.classList.remove(`border-red-500`);
        input.classList.add(`border-slate-grey`);
    });
    dom.querySelector(`#form-success`).textContent = ``;
})