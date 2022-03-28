let array = ["Celular", "Notebook", "Desktop", "Videogame"]

let continuar = "y"
let Adicionar = "y"
let remover = ""
let item = ""

let Opcao = ""
let Op2 = ""
let Op3 = ""

let t = array.length
let y = 0


while(continuar == "y"){
	while(Adicionar == "y"){
		Adicionar = prompt("Você deseja adicionar um item a sua lista de pertences?")
		if(Adicionar == "y"){
			Opcao = prompt("Você deseja adiciona-ló no topo ou no fundo da lista?")
			switch(Opcao){
				case("topo"):
					item = prompt("Digite o item:")
					array.unshift(item)
					t = array.length
					break
				case("fundo"):
					item = prompt("Digite o item:")
					array.push(item)
					t = array.length
					break
			}
		} else {
			Op2 = prompt("Você deseja remover algum item da lista? Se sim, um no topo, fundo ou meio?")
			switch(Op2){
				case("topo"):
					document.write(`O elemento "${array[0]}" foi removido</br>`)
					array.shift()
					t = array.length
					break
				case("fundo"):
					document.write(`O elemento "${array[t-1]}" foi removido</br>`)
					array.pop()
					t = array.length
					break
				case("meio"):
					Op3 = prompt("Digite o número do item: ")
					document.write(`O item "${array[Op3-1]}" foi removido</br>`)
					array.splice(Op3-1, 1)
					t = array.length
					break
				case("n"):
					t = array.length
					break
			}
		}
	}
	
	remover = prompt("Deseja apagar a lista?")
	if (remover == "y"){
		array.splice(0)
		document.write("Sua lista foi deletada com sucesso")
		t = array.length
	}
	
	if(t == 0){
	} else {
		function Print(x, w) {
			while(w < x){
			document.write(`${w+1} - ${array[w]}</br>`)
			w++
			}
		}
		array.forEach(Print(t, y)) // let x = t | let w = y
	}
	continuar = "n"
}