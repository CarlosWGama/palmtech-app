import { Foto } from "../models/foto";
import { Paciente } from "../models/paciente";

export const FotoService = {
    //Busca as ultimas fotos
    ultimasFotos(inicial:number = 0, limite = 5): Promise<Foto[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                const lista = [
                    new Foto(1, 1, new Paciente(1, 'João da Silva'), '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(2, 1, new Paciente(2, 'Maria Jose'), '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(3, 1, new Paciente(3, 'Chico Anisio'), '2020-07-12', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(4, 1, new Paciente(4, 'Teste 123'), '2020-07-11', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(5, 1, new Paciente(5, 'Carlos Alberto Lessa'), '2020-07-10', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(6, 1, new Paciente(6, 'João Maria'), '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(7, 1, new Paciente(7, 'Thiago Assunção'), '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(8, 1, new Paciente(8, 'JOao'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(9, 1, new Paciente(9, 'JOao'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(10, 1, new Paciente(10, 'JOao'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(11, 1, new Paciente(11, 'JOao'), '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(12, 1, new Paciente(12, 'JOao'), '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(13, 1, new Paciente(13, 'JOao'), '2020-07-03', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png')
                ]
                
                resolve(lista.slice(inicial, inicial+limite))
            }, 1000)
        });
    },

    fotos(paciente: Paciente, inicial:number = 0, limite = 5): Promise<Foto[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                const lista = [
                    new Foto(1, 1, paciente, '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(2, 1, paciente, '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(3, 1, paciente, '2020-07-12', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(4, 1, paciente, '2020-07-11', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(5, 1, paciente, '2020-07-10', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(6, 1, paciente, '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(7, 1, paciente, '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(8, 1, paciente, '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(9, 1, paciente, '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(10, 1, paciente, '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(11, 1, paciente, '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(12, 1, paciente, '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(13, 1, paciente, '2020-07-03', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png')
                ]
                
                resolve(lista.slice(inicial, inicial+limite))
            }, 1000)
        });
    },

    minhasFotos(inicial:number = 0, limite = 5): Promise<Foto[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                const lista = [
                    new Foto(1, 1, new Paciente(1, 'João da Silva'), '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(2, 1, new Paciente(1, 'João da Silva'), '2020-07-13', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(3, 1, new Paciente(1, 'João da Silva'), '2020-07-12', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(4, 1, new Paciente(1, 'João da Silva'), '2020-07-11', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(5, 1, new Paciente(1, 'João da Silva'), '2020-07-10', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(6, 1, new Paciente(1, 'João da Silva'), '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(7, 1, new Paciente(1, 'João da Silva'), '2020-07-09', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(8, 1, new Paciente(1, 'João da Silva'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(9, 1, new Paciente(1, 'João da Silva'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(10, 1, new Paciente(1, 'João da Silva'), '2020-07-08', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(11, 1, new Paciente(1, 'João da Silva'), '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(12, 1, new Paciente(1, 'João da Silva'), '2020-07-04', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png'),
                    new Foto(13, 1, new Paciente(1, 'João da Silva'), '2020-07-03', 'https://saude.abril.com.br/wp-content/uploads/2017/09/pe-thumb.jpg?quality=85&strip=info', 'https://s2.glbimg.com/GPGpxZiM1ycelCzF5CDsgsQjzWw=/620x390/s.glbimg.com/es/ge/f/original/2012/01/04/pe_dornasola3_60.jpg', 'https://rsaude.com.br/img/noticias/g/pe-diabetico-e-coisa-seria-15022018152302.png')
                ]
                
                resolve(lista.slice(inicial, inicial+limite))
            }, 1000)
        });
    },

    //Cadastra a foto de um pé
    cadastrar(foto): Promise<{sucesso:boolean, erro?: string}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({sucesso: true})
            }, 1000)
        });
    }
}
