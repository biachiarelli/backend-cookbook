
export const postRecipe = async (req, res) => {
    try {
        await req.prisma.recipe.create({
            data: {
                name: req.body.name,
                instructions: req.body.instructions,
                category: req.body.category,
                imageUrl: req.body.imageUrl
            }
        })

        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar receita' });
    }
}

export const getRecipe = async (req, res) => {
    try {
        let recipes = []
    
        if(req.query){
            recipes = await req.prisma.recipe.findMany({
                where: {
                    name: req.query.name
                        ? {
                              contains: req.query.name, 
                              mode: "insensitive", 
                          }
                        : undefined,             
                    category: req.query.category,
                    id: req.query.id,
                }
            })
        } else {
            recipes = await req.prisma.recipe.findMany()
        }
    
        res.status(200).json(recipes)
    } catch(error) {
        res.status(500).json({ error: 'Erro ao buscar receita' })
    }
}

export const updateRecipe =  async (req, res) => {
    try {
        await req.prisma.recipe.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                instructions: req.body.instructions,
                category: req.body.category,
                imageUrl: req.body.imageUrl
            }
        })
    
        res.status(201).json(req.body)

    } catch(error) {
        res.status(500).json({ error: 'Erro ao atualizar receita' })
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        await req.prisma.recipe.delete({
            where: {
                id: req.params.id
            }
        })
    
        res.status(200).json({ message: 'Receita deletada com sucesso!' })
    } catch(error) {
        res.status(500).json({ error: 'Erro ao deletar receita' })
    }
}