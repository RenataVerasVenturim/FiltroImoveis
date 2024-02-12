//declarar variáveis
const comprar=document.getElementById('comprar');
const alugar=document.getElementById('alugar');
const btn=document.getElementById('btn');
let TodosImoveis=[
    {objetivo:'Comprar', valor:290000, descricao:'Casa com 2 qrts, sala, cozinha, banheiro e varanda', Endereco:'Rua abc,123'},
    {objetivo:'Comprar', valor: 190000, descricao:'Casa com 1 qrt, sala, cozinha, banheiro', Endereco:'Rua xyz,345'},
    {objetivo:'Alugar', valor: 1800, descricao:'Casa com 2 qrts, sala, cozinha, banheiro e varanda', Endereco:'Rua abc,123'},
    {objetivo:'Alugar', valor:2500, descricao:'Casa com 1 qrt, sala, cozinha, banheiro', Endereco:'Rua xyz,345'},
]
let resultado = document.getElementById('resultado');
let ImoveisFiltrados;
//entrada de dados
btn.addEventListener('click',function(){
    let valorMaximo=parseFloat(document.getElementById('valorMaximo').value);

 if(comprar.checked){
    ImoveisFiltrados=TodosImoveis.filter(casa=>{
        return casa.objetivo =='Comprar' &&
                casa.valor <= valorMaximo;
    })
} else if(alugar.checked){
    ImoveisFiltrados=TodosImoveis.filter(casa=>{
        return casa.objetivo =='Alugar' &&
                casa.valor <= valorMaximo;
    })
}

//saída de dados
resultado.value=JSON.stringify(ImoveisFiltrados);   
})

//------------------------------------------------------------------------
let btnCadastro=document.getElementById('btnCadastro');
let aluguelCadastro=document.getElementById('aluguel');
let vendaCadastro=document.getElementById('venda');
let objetivoCadastro;
let NovoImovel;

btnCadastro.addEventListener('click',function(){
    let valorCadastro=parseFloat(document.getElementById('valorCadastro').value);

    let descricaoCadastro=document.getElementById('descricaoCadastro').value;
    
let enderecoCadastro=document.getElementById('enderecoCadastro').value;

    if(aluguelCadastro.checked){
        objetivoCadastro='Alugar';
    } else if(vendaCadastro.checked){
        objetivoCadastro='Comprar';
    }

    NovoImovel=
        {
            objetivo: objetivoCadastro , 
            valor: valorCadastro ,
            descricao: descricaoCadastro,
            endereco:enderecoCadastro
        };
    TodosImoveis.push(NovoImovel);

console.log(TodosImoveis)
})
    

//------------------------------------------------
let AbreSecaoDeCadastro=document.getElementById('AbreSecaoDeCadastro');
let SecaoBusca=document.getElementById('SecaoBusca');
let secaoCadastro=document.getElementById('secaoCadastro')
let secaoDeBusca=document.getElementById('secaoDeBusca')

SecaoBusca.addEventListener('click',function(){
    if(AbreSecaoDeCadastro.checked){

        secaoDeBusca.style.display='none';
        secaoCadastro.style.display='block';
        
    
    }else if(SecaoBusca.checked){
        secaoDeBusca.style.display='block';
        secaoCadastro.style.display='none';
    }    
})
AbreSecaoDeCadastro.addEventListener('click',function(){
    if(AbreSecaoDeCadastro.checked){

        secaoDeBusca.style.display='none';
        secaoCadastro.style.display='block';
        
    
    }else if(SecaoBusca.checked){
        secaoDeBusca.style.display='block';
        secaoCadastro.style.display='none';
    }    
})


  