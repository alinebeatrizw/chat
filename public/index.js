
        var socket = io("localhost:3000/")

        function renderizaMensagem(mensagem){
            $(".mensagens").append('<div class="mensagem" > <strong style="color: blue;">'+ mensagem.autor+' </strong>: '+mensagem.mensagem+'  </div>')
        }

        socket.on("mensagensAnteriores", function(mensagens){
            for(mensagem of mensagens){
                renderizaMensagem(mensagem)
            }
        })

        socket.on("mensagemRecebida", function(mensagem){
            renderizaMensagem(mensagem)
        })

        $("#chat").submit(function(event){
            event.preventDefault()

            var autor = $("input[name=username]").val()
            var mensagem = $("input[name=mensagem]").val()

            if(autor.length && mensagem.length){
                var mensagemObject = {
                    autor : autor,
                    mensagem : mensagem,
                }

                renderizaMensagem(mensagemObject)

                socket.emit("enviaMensagem", mensagemObject)
            }
        })
