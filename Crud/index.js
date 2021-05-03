var dados = []

function PopulaTabela(){
    if(Array.isArray(dados)){

        $("#tblDados tbody").html("")  

        localStorage.setItem("__dados__", JSON.stringify(dados))

        dados.forEach(function (item) {
            //Template String
            $("#tblDados tbody").append(` <tr>
                <td>${item.Id}</td>
                <td>${item.Nome}</td>
                <td>${item.RgCpf}</td>
                <td>${item.TipoImovel} </td>
                <td>${item.Munic}</td>
                <td>${item.Telefone}</td>
                <td><button type="button" class="btn btn-primary"<i class="fa fa-edit" /></button></td>
                <td><button type="button" class="btn btn-danger"><i class="fa fa-trash" /></button></td> 
            </tr>`)
                     
        })
    }
}

$(function () {
    //bloco responsável pela exuceção do Jquery. Executa ao carregar o display/tela
    //armazenamento das informações nos cookies do navegador
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados){
        PopulaTabela()
    }

    $("#btnSalvar").click(function() {
        //evento para o click do botão salvar

        let Nome = $("#txtNome").val()
        let RgCpf = $("txtCPFRG").val()
        let TipoImovel = $("txtTipoImv").val()
        let Municipio = $("txtMunic").val()
        let Telefone = $("txtTelefone").val()
        
        let registro = {}

        registro.Nome = Nome
        registro.RgCpf = RgCpf
        registro.TipoImovel = TipoImovel
        registro.Municipio = Municipio
        registro.Telefone = Telefone

        registro.Id = dados.length + 1

        dados.push(registro)

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        $("#txtNome").val("")
        $("#txtCPFRG").val("")
        $("#txtTipoImv").val("")
        $("#txtMunic").val("")
        $("#txtTelefone").val("")

        PopulaTabela()
    })

})
console.log(item.Id)