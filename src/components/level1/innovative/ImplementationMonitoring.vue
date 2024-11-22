<template>
    <div class="level-container">
      <!-- Header -->
      <h2>Implementation & Monitoring</h2>
      <p>Turn your strategy into actionable tasks, allocate resources, and monitor progress.</p>
  
      <!-- Budget and Progress Display -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Overall Progress:</strong> {{ progress }}%</p>
      </div>
  
      <!-- Task Board -->
      <div class="task-board">
        <h3>Action Plan</h3>
        <div class="tasks">
          <div
            v-for="task in tasks"
            :key="task.id"
            :class="['task-card', task.completed ? 'completed' : '']"
          >
            <h4>{{ task.name }}</h4>
            <p><strong>Cost:</strong> ${{ task.cost }}</p>
            <p><strong>Progress:</strong> {{ task.progress }}%</p>
            <button
              v-if="!task.completed"
              @click="allocateResources(task)"
              class="action-btn"
            >
              Allocate Resources
            </button>
          </div>
        </div>
      </div>
  
      <!-- Event Area -->
      <div v-if="eventMessage" class="event-popup">
        <p>{{ eventMessage }}</p>
        <button @click="resolveEvent">Resolve</button>
      </div>
  
      <!-- Insights Section -->
      <div class="insights">
        <h3>Chanakya’s Insight</h3>
        <p>“A wise leader adapts to changing circumstances while keeping the vision intact.”</p>
      </div>
  
      <!-- Finish Level -->
      <button v-if="progress === 100" @click="completeLevel" class="finish-btn">
        Finish Level
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 15000, // Initial budget
        progress: 0, // Overall progress
        eventMessage: '', // Random event message
        tasks: [
          { id: 1, name: "Launch Marketing Campaign", cost: 5000, progress: 0, completed: false },
          { id: 2, name: "Set Up Operations", cost: 7000, progress: 0, completed: false },
          { id: 3, name: "Hire Key Staff", cost: 3000, progress: 0, completed: false },
        ],
      };
    },
    methods: {
      allocateResources(task) {
        if (this.budget >= task.cost) {
          this.budget -= task.cost;
          task.progress = 100;
          task.completed = true;
          this.updateProgress();
  
          // Trigger a random event
          if (Math.random() < 0.5) {
            this.triggerEvent(task.name);
          }
        } else {
          alert("Insufficient budget to allocate resources to this task!");
        }
      },
      updateProgress() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter((task) => task.completed).length;
        this.progress = Math.round((completedTasks / totalTasks) * 100);
      },
      triggerEvent(taskName) {
        this.eventMessage = `Unexpected challenge in "${taskName}"! Allocate an additional $2000 to resolve.`;
      },
      resolveEvent() {
        if (this.budget >= 2000) {
          this.budget -= 2000;
          this.eventMessage = "";
        } else {
          alert("Insufficient budget to resolve the challenge!");
          this.eventMessage = "";
        }
      },
      completeLevel() {
        alert("Congratulations! You have successfully implemented your plan!");
        this.$router.push("/evaluation-control"); // Navigate to the next level or summary
      },
    },
  };
  </script>
  
  <style scoped>
  .level-container {
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background: linear-gradient(135deg, #e8f4ff, #d6e9ff);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #3774e6;
  }
  
  .status-container {
    display: flex;
    justify-content: space-between;
    background: #f9fafc;
    padding: 10px;
    border-radius: 8px;
    margin: 15px 0;
    font-weight: bold;
  }
  
  .task-board {
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .tasks {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  
  .task-card {
    background: #f0f4f8;
    border: 1px solid #bcd4e6;
    border-radius: 8px;
    padding: 15px;
    width: 200px;
    text-align: center;
    position: relative;
  }
  
  .task-card.completed {
    background: #d4edda;
    border-color: #c3e6cb;
  }
  
  .action-btn {
    padding: 10px 15px;
    margin-top: 10px;
    background: #3774e6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .event-popup {
    margin-top: 20px;
    background: #fff8e6;
    border: 1px solid #ffd700;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .insights {
    margin-top: 30px;
    background: #f0f4f8;
    border: 1px solid #bcd4e6;
    border-radius: 8px;
    padding: 15px;
    font-style: italic;
    color: #3774e6;
  }
  
  .finish-btn {
    padding: 12px 25px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
  </style>
  