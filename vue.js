new Vue({
	el: "#app",

	data : {
		wolfHeart : 100,
		userHeart : 100,
		heart : 0,
		push : 0,
		punch : 0
	},

	methods : {

		zerbe() { 
			this.wolfHeart -= Math.floor(Math.random() * 10);
			this.userHeart -= Math.floor(Math.random() * 10)
			if(this.wolfHeart < 0) {
				this.wolfHeart = 0
				this.userHeart = this.userHeart
				this.heart = 2
				this.punch = 2
				this.push = 2
				swal({
				  title: "Qazandınız?",
				  text: "Canavar Məhv Edildi!",
				  icon: "success",
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				    swal(location.reload(), {
				      icon: "success",
				    });
				  }
				});
			}else if(this.userHeart < 0) {
				this.userHeart = 0
				this.wolfHeart = this.wolfHeart
				this.heart = 2
				this.punch = 2
				this.push = 2
				swal({
				  title: "Məğlub Oldunuz?",
				  text: "İstifadəçi Məhv Edildi!",
				  icon: "error",
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				    swal(location.reload(), {
				      icon: "success",
				    });
				  }
				});
			}
	},

	siddetliZerbe() { 
				this.wolfHeart -= Math.floor(Math.random() * 30)
				setTimeout(() => this.userHeart -= Math.floor(Math.random() * 30), 400)
				this.push++
			if(this.wolfHeart < 0) {
				this.wolfHeart = 0
				this.userHeart = this.userHeart
				this.heart = 2
				this.punch = 2
				this.push = 2
				swal({
				  title: "Qazandınız?",
				  text: "Canavar Məhv Edildi!",
				  icon: "succes",
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				    swal(location.reload(), {
				      icon: "success",
				    });
				  }
});
			}else if(this.userHeart < 0) {
				this.userHeart = 0;
				this.wolfHeart = this.wolfHeart
				this.heart = 2
				this.punch = 2
				this.push = 2
				swal({
				  title: "Məğlub Oldunuz?",
				  text: "İstifadəçi Məhv Edildi!",
				  icon: "error",
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				    swal(location.reload(), {
				      icon: "success",
				    });
				  }
				});
			}
	},

	can() {
		this.heart++
		if(this.heart == 3) {
			this.heart = this.heart
		}else {
			this.userHeart > 80 ? 100 : this.userHeart += 20;
			this.wolfHeart > 80 ? 100 : setTimeout(() => this.wolfHeart += 20, Math.floor(Math.random() * 5000));
		}
	},

	yenile() {
		this.wolfHeart = 100
		this.userHeart = 100
		this.heart = 0
		this.push = 0
		this.punch = 0
	}

},

	
})