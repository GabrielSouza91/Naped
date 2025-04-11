import { Button } from "@/components/Buttom/Buttom";
import "./RegisterPageStyles.scss";
import { Input } from "@/components/Input/Input";
import user from "@images/user.png"
import lock from "@images/lock.png"
import email from "@images/at-sign.png"


export default function RegisterPage() {
  return (
    <div className="register_container">
      <span className="span_gradiant">NAPED</span>
      
			<span className="span_title mb-2">Faça uma conta</span>

      <Input icon={user} placeholder="Dígite o seu usuário" />
			<Input icon={email} type="email" placeholder="Dígite o seu email" />
      <Input icon={lock} placeholder="Dígite a sua senha" type="password" />
			<Input icon={lock} placeholder="Dígite novamente a sua senha" type="password" />

      <Button className="mt-2" label="Criar a conta" />
      <a className="span_gradiant" href="">
        Já tenho uma conta
      </a>
    </div>
  );
}
