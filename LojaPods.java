import java.util.ArrayList;
import java.util.List;

class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }
}

public class LojaPods {

    public static void main(String[] args) {

        List<Produto> pods = new ArrayList<>();

        pods.add(new Produto("Pod Ignite 150", 150.00));
        pods.add(new Produto("Pod Elf Bar", 80.90));
        pods.add(new Produto("Pod Boom", 50.90));
        pods.add(new Produto("Pod Ice 5000", 49.90));

        System.out.println("===== Loja de Pods =====\n");

        for (Produto p : pods) {
            System.out.println("Produto: " + p.getNome());
            System.out.println("Preço: R$ " + p.getPreco());
            System.out.println("------------------------");
        }
    }
}
