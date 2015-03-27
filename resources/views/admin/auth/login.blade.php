<form ng-submit="login()" layout="column" flex="30">
	<md-content md-theme="docs-dark" class="md-padding" layout="column" layout-align="center center">
		<md-input-container>
			<label>Email</label>
			<input ng-model="user.email" type="text">
		</md-input-container>
		<md-input-container>
			<label>Password</label>
			<input ng-model="user.password" type="password">
		</md-input-container>
	</md-content>

	<section layout="column" layout-align="center center">
		<md-button class="md-raised">Submit</md-button>
	</section>
</form>