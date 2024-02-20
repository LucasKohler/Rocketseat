import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
	return (
		<div>
			<Header />

			<Post
				author="Lucas Kohler"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quos, a recusandae quasi eos itaque sapiente nemo quam qui aspernatur neque architecto animi voluptatibus. Dolores, nemo. Enim facere suscipit expedita."
			/>
			<Post author="Paulo Muzy" content="Eu sou corno" />
		</div>
	)
}
