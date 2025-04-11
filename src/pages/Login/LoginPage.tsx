import { Button } from "@/components/Buttom/Buttom";
import "./LoginPageStyles.scss";
import { Input } from "@/components/Input/Input";
import user from "@images/user.png"
import lock from "@images/lock.png"

export default function LoginPage() {
  return (
    <div className="login_container">
      <span className="span_gradiant">NAPED</span>
      
			<span className="span_title mb-2">Entrar na Conta</span>

      <Input icon={user} placeholder="Dígite o seu usuário" />
      <Input icon={lock} placeholder="Dígite a sua senha" type="password" />

      <Button className="mt-2" label="Logar na sua conta" />
      <a className="span_gradiant" href="">
        Criar uma conta
      </a>
    </div>
  );
}
