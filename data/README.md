## Detalhes do Dataset

##### O estereótipo de gênero afeta o fluxo de experiência, motivação e desempenho dos alunos em sistemas de tutoria gamificados para lógica?

O instrumento IMMS [Cardoso-Júnior et al. 2020] mede motivação em quatro domínios, são eles: Atenção, Relevância, Confiança e Satisfação (ARCS). Desenvolvido por [Keller 2016], onde menciona que os ARCS são focados no contexto de ambientes de aprendizagem e o estudante está totalmente motivado se estiver focado nessas quatro áreas.
A atenção é utilizada por meio de técnicas que provoquem a atração de usuário. A relevância pretende despertar o interesse do tema com a pessoa, podendo criar um vínculo com a sua forma de aprendizagem. A confiança faz com que ele se sinta esforçado para realizar a atividade por meio de sua capacidade pessoal e o último domínio é quando ele termina a tarefa e tem sucesso ao realizá-las  [Cardoso-Júnior et al. 2020].

-   *responseId* - identificação do participante
    
-   *testType* - Tipo de ambiente que o sistema alocou para o participante com três tipos de ambientes:
	-   stFemale - ambiente feminino
	-   stMale - ambiente masculino
	-   default - ambiente neutro
    
-   *activityPoints* - quantidade de pontos obtidos na atividade.
    
-   *dfsPreMean* - Média aritmética dos itens do questionário de fluxo.
    
-   *dfs01 … dfs09* - Itens do questionário de dfs dividido por colunas.
 
 * *motivationPos01 ... motivationPos36* - Itens do questionário de motivação
	 * **attention**  - Soma dos itens relacionados a atenção
	 * **relevance**  - Soma dos itens relacionados a relevância
	 * **confidence**   - Soma dos itens relacionados a confiança
	 * **satisfaction**  - Soma dos itens relacionados a satisfação

-   *fss01 … fss09* - essas colunas são os itens marcados pelo participante do questionário de flow
* *flowPosMean* - média dos itens marcados no questionário de flow.

- *Condition* - Consição do participante em relação ao ambiente:
	* inBoost: gênero do participante igual ao tipo de ambiente (mulheres em ambientes femininos, homens em ambientes masculinos)
	* inThreat: gênero do participante diferente ao tipo de ambiente (mulheres em ambientes masculinos, homens em ambientes femininos)
	* control: participantes em ambientes neutros
* *gender* - gênero do participant.


#### Formulação das hipóteses

* H1:0 & Motivação não muda para participantes usando ST-F

* H1:0 & Motivação não muda para participantes usando ST-F

* H2:0 & Motivação não muda para participantes usando ST-M

* H2:1 & Motivação muda para participantes usando ST-M

* H3:0 & Performance é igual em todos os grupos

* H3:1 & Performance muda sobre grupos diferentes

* H4.0 & Nível de fluxo é igual para todos os grupos

* H4.1 & Nível de fluxo é diferente em cada grupo