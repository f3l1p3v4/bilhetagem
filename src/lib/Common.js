import Constants from './Constants';

export function modelFactory (className, params = null) {
    className = className.tuUpperCase();
    return new Constants[className](params);
}

export function notify (type) {
    switch (type) {
    case 'success create':
        alert({ message: 'Inserido com sucesso', type: 'positive', icon: 'fas fa-check-circle' });
        break
    case 'fail create':
        alert({ message: 'Erro ao inserir', type: 'negative', icon: 'fas fa-exclamation-triangle' });
    break
    case 'success update':
        alert({ message: 'Salvo com sucesso', type: 'positive', icon: 'fas fa-check-circle' });
    break
    case 'fail update':
        alert({ message: 'Erro ao salvar', type: 'negative', icon: 'fas fa-exclamation-triangle' });
    break
    case 'success remove':
        alert({ message: 'Removido com sucesso', type: 'positive', icon: 'fas fa-check-circle' });
    break
    case 'fail remove':
        alert({ message: 'Erro ao remover', type: 'negative', icon: 'fas fa-exclamation-triangle' });
    break
    case 'fail validation':
        alert({ message: 'Erro ao validar as informações', type: 'negative', icon: 'fas fa-exclamation-triangle' });
    break
    }
}