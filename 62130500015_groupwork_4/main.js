    const app = {
        data() {
            return {
                Gallery: [{ images: 'images/oita.jpg', name: 'Usa Shrine,Oita', done: false ,show:true},
                { images: 'images/wakayame.jpg', name: 'Nachi Fall,Wakayama', done: false ,show:true},
                { images: 'images/yamakuji.jpg', name: 'Motonosumi-inari Shrine,Yamakuji', done: false ,show:true}
                ],
                focus:false,
                cindex:0,
                task:''
             }
            },
            methods: {
            click(index) {
                this.Gallery[index].done = !this.Gallery[index].done
            },
            doubleclick(index)
            {
                this.cindex=index;
                this.focus=true;
            },
            checkTask()
            {
                console.log("add");
                for(i=0;i<this.Gallery.length;i++)
                {
                    if(this.Gallery[i].name.toUpperCase().search(this.task.toUpperCase())<0) this.Gallery[i].show = false; 
                    else this.Gallery[i].show = true;
                }
            },
            allShow(){
                this.focus=false;
                this.task='';
                for(i=0;i<this.Gallery.length;i++)
                {
                     this.Gallery[i].show = true; 
                }
            },
            quit(){
                this.focus=false;
            }
        },
            computed: {
            countPic() {
                return this.Gallery.filter(t => !t.false).length
            }
            
        }

    }
    Vue.createApp(app).mount('#app')