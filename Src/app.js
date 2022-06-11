//table Data
let tbody = document.querySelector('tbody')

//form data
let form = document.getElementById('form')


function createTr() {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    // form to fix elements
    let btn = document.createElement('button')
    btn.classList = 'bg-danger d-inline-block me-2 text-white btn btn-danger remove'
    btn.innerHTML = 'Remove'
    let btn1 = document.createElement('button')
    btn1.classList = 'bg-primary d-inline-block text-white btn btn-primary edit'
    btn1.innerHTML = 'Edit'
    td1.appendChild(btn)
    td1.appendChild(btn1)

    for(let i = 0; i<arguments.length; i++) {
      let td = document.createElement('td')
      td.innerHTML = arguments[i]
      tr.appendChild(td)
      tr.insertAdjacentElement('beforeend',td1)
    }

    tbody.insertAdjacentElement('beforeend',tr)
}

//form value to store table
form.addEventListener('submit',function(e) {
    e.preventDefault()
    let formData = {};
    [...this.elements].forEach(el=> {
        if(el.type!=='submit') {    
            if(!el.value) {
                alert('Please Provide the value')
                form.style.top = '-800px'
                throw new Error
            }else {
                formData[el.name] = el.value 
                form.style.top = '-800px'
                form.style.transition = '.5s'
            }
        } 
    })
    this.reset() 
    createTr(formData.idnum,formData.sname,formData.fname,formData.mname,formData.clas,formData.phone)
})

// Table row remove and edit
tbody.addEventListener('mouseover',function(e) {
    ;[...tbody.children].forEach(tr=> {
        let dtl = tr.querySelectorAll('.remove')
        dtl.forEach(remove=> {
            remove.addEventListener('click',function(e) {
                tr.remove()
            })
        })
        let edit = tr.querySelectorAll('.edit')
        edit.forEach(edit=> {
            edit.addEventListener('click',function(e) {
                form.style.top = '200px'
                form.style.transition = '1s'
            })
        })
    })
     
})

// button click to show form
let add = document.getElementById('add')

add.addEventListener('click',function(e) {
    form.style.top = '200px'
    form.style.transition = '1s'
})
