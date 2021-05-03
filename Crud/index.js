var dados = []

function ApagaRegistro(id) {
    let _confirm = confirm("Deseja realmente excluir este registro?")

    if(_confirm) {
        for(let i = 0; i < dados.length; i++){
            if(dados[i].ID == Id){
                dados.splice(i, 1)
            }
        }

        PopulaTabela()
    }
}

function EditaRegistro(id) {
    $("modalRegistro").modal("show")

    dados.forEach(function(item) {
        if (item.ID == id) {
            $("#hdID").val(item.Id)
            $("txtNome".val(item.Nome))
            $("txtCPFRG".val(item.RgCpf))
            $("txtTipoImv".val(item.TipoImovel))
            $("txtMunic".val(item.Munic))
            $("txtTelefone".val(item.Telefone))
        }
    })

}

function PopulaTabela(){
    if(Array.isArray(dados)){

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")  

        

        dados.forEach(function (item) {
            //Template String

            $("#tblDados tbody").append(` <tr>
                <td>${item.Id}</td>
                <td>${item.Nome}</td>
                <td>${item.RgCpf}</td>
                <td>${item.TipoImovel} </td>
                <td>${item.Munic}</td>
                <td>${item.Telefone}</td>
                <td><button type="button" class="btn btn-primary" onclick="javascript:EditaRegistro(${item.ID});"><i class="fa fa-edit" /></button></td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash" /></button></td> 
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
        let _id = $("#hdID").val()
        let Nome = $("#txtNome").val()
        let RgCpf = $("txtCPFRG").val()
        let TipoImovel = $("txtTipoImv").val()
        let Municipio = $("txtMunic").val()
        let Telefone = $("txtTelefone").val()
        
        

        if (!_id || _id == "0"){
            let registro = {}
            registro.Nome = Nome
            registro.RgCpf = RgCpf
            registro.TipoImovel = TipoImovel
            registro.Municipio = Municipio
            registro.Telefone = Telefone

            registro.Id = dados.length + 1
            dados.push(registro)
        }
        else {
            dados.forEach(function(item){
                if (item.ID == _id){
                    item.Nome = Nome
                    item.RgCpf = RgCpf
                    item.TipoImovel = TipoImovel
                    item.Municipio = Municipio
                    item.Telefone = Telefone
                }
            })
        }

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        //Limpeza dos campos
        $("#hdID").val("0")
        $("#txtNome").val("")
        $("#txtCPFRG").val("")
        $("#txtTipoImv").val("")
        $("#txtMunic").val("")
        $("#txtTelefone").val("")

        PopulaTabela()
    })

})