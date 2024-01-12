const userPageTemplate = /*html*/`
    <section id="user-page-container">
        <h1 id="page-marker">Página do Usuário</h1>
        <div class="alert alert-secondary user-sections" id="update-current-password"><h4 @click="toggleDisplayPasswordForm">Atualizar Senha</h4>
            <div id="password-form" v-show="showPasswordForm">
                <form onsubmit="return false;">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="bg-dark text-white input-group-text">Senha Atual</span>
                        </div>
                        <input class="user-page-inputs form-control" id="current-password" type="password" minlength="6" required v-model="currentPassword">            
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="bg-dark text-white input-group-text">Nova Senha</span>
                        </div>
                        <input class="user-page-inputs form-control" id="new-password" type="password" minlength="6" required v-model="newPassword">            
                    </div>
                    <input class="btn btn-success" type="submit" @click="updatePassword">
                </form>
            </div>
        </div>
            
        <div class="alert alert-secondary user-sections" id="danger-zone"><h4 @click="toggleDisplayDangerZone">Controle da Conta</h4>
            <div id="danger-buttons" v-show="showDangerZone">
                <button class="btn btn-danger dangerzone-buttons" data-bs-toggle="modal" data-bs-target="#confirmation-modal">Excluir Conta</button>
                <button class="btn btn-dark dangerzone-buttons" @click="signOutAccount">Sair da Conta</button>
            </div>
        </div>

        <div class="modal fade" id="confirmation-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmação</h5>
                    </div>
                    <div class="modal-body">
                        <p>Você realmente deseja excluir sua conta? Esta ação é irreversível.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#insert-password-modal">Sim, tenho certeza</button>
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="insert-password-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5>Digite a sua senha</h5>
                    </div>

                    <div class="modal-body">
                        <form onsubmit="return false;">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="bg-dark text-white input-group-text">Senha</span>
                                </div>
                                <input class="user-page-inputs form-control bg-dark text-white" type="password" minlength="6" required v-model="currentPassword">            
                                <button class="btn btn-danger" @click="deleteAccount">Excluir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

`

exports = { userPageTemplate }