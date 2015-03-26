<form ng-submit="login()">
	<md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column">
		<md-input-container>
			<label>Email</label>
			<input ng-model="user.email" type="email">
		</md-input-container>
		<md-input-container>
			<label>Password</label>
			<input ng-model="user.password" type="password">
		</md-input-container>
	</md-content>

	<section layout="row" layout-sm="column">
		<md-button class="md-raised">Submit</md-button>
	</section>
</form>