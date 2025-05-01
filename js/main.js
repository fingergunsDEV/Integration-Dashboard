// Configuration object
import { config } from './config.js';
import { initUI } from './ui.js';
import { connectGoogle, connectFacebook, connectLinkedIn } from './integrations.js';
import { handleNodeEvents, createNewNode, deleteNode, testNode, updateNodeParams } from './automation.js';
import { initNetworkMonitor, configureNode, toggleNodeStatus } from './networking.js';

// Initialize on page load
window.addEventListener('load', () => {
  initUI();
  initNetworkMonitor();
});

// Expose functions to global scope for HTML event handlers
window.connectGoogle = connectGoogle;
window.connectFacebook = connectFacebook;
window.connectLinkedIn = connectLinkedIn;
window.showJsonPreview = (service) => {
  const jsonElement = document.getElementById(`${service}-json`);
  if (jsonElement) {
    jsonElement.classList.toggle('active');
  }
};
window.showAutomationModal = () => {
  document.getElementById('automation-modal').classList.add('active');
  handleNodeEvents.initializeDraggableNodes();
};
window.hideAutomationModal = () => {
  document.getElementById('automation-modal').classList.remove('active');
};
window.updateNodeParams = updateNodeParams;
window.deleteNode = deleteNode;
window.testNode = testNode;
window.showNetworkNodeModal = (nodeId) => {
  document.getElementById('network-node-modal').classList.add('active');
  configureNode(nodeId);
};
window.toggleNodeStatus = toggleNodeStatus;
