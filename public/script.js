class Script {
    constructor(){
        this.init()
    }
    submit = () =>{
        const form = document.querySelector('.client-form');
        if(form){
            form.addEventListener('submit',(e)=>{
                e.preventDefault();
                // const formData = new FormData(e.target);
                // console.log(e.target);
                // console.log(formData);
                var formData = new URLSearchParams();
                console.log(e.target)
                for(const pair of new FormData(e.target)){
                   // console.log(pair)
                   formData.append(pair[0],pair[1])
                }
       
                fetch('/sent',{
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'application/json',
                    // },
                    // body: JSON.stringify(formData),
                    body: formData,
                }).then(res=>res.json())
                .then((data)=>{
                    console.log(data);
                    // let list = '';
                    // data.map((item)=>{
                    //     list = list + `<li>${item}</li>`
                    // })
                    // document.getElementById('list').innerHTML = list;
                    window.location.reload();
                })
            })
        }
    }
    clickEvent = () =>{
        document.querySelectorAll('li').forEach((item)=>{
            item.addEventListener('click',(e)=>{
                let id = e.target.getAttribute('data-attr');
                fetch('/remove',{
                    method:'POST',
                    headers: {
                            'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({'id': id})
                }).then(res=>res.json())
                .then((data)=>{
                    console.log(data);
                    window.location.reload();
                })
            })
        })
    }
    init = () =>{
        this.submit();
        this.clickEvent();
    }
}
new Script;