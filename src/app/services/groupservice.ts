import {Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import { Injectable } from '@angular/core';
import { Group } from '../model/group';

@Injectable({
    providedIn: 'root'
})
export class Groupservice {

    groups :Group[] = [];
    lastGId :number;

    constructor(){

        // Read data from Storage
        this.readGroupCounter();
        this.readGroups();
        if (this.groups[0] == undefined) {
            this.groups.push({
                id: 0,
                name: "Default"
            });
        }
        
        // If we only have default group reset lastGId to 1
        if (this.groups.length == 1) {
            this.lastGId = 1;
            this.storeGroupCounter(this.lastGId);
        }
    }

    public getGroup(id: number): Group {
        return this.groups.filter(g => g.id === id)[0];
    }
    /**
     * Returns all groups
     */
    public getGroups() :Group[] {

        return this.groups;
    }

    /**
     * Saves a new group or updates an old one
     */
    public saveGroup(g :Group){
        if (g.id == undefined){
            g.id = this.lastGId++;
            this.groups.push(g);
            this.storeGroupCounter(this.lastGId);
        } else {
            this.deleteGroup(g.id);
            this.groups.push(g);
            
        }
        this.storeGroup();
        console.log(g);
    }

    /**
     * Deletes a group
     * @param id id of the group to be deleted
     */
    deleteGroup(id :number) {
        this.groups = this.groups.filter(g => g.id != id);
        this.storeGroup();
        // If we ever delete all groups reset the lastGId to 1
        if (this.groups.length == 1){
            this.lastGId = 1;
            this.storeGroupCounter(this.lastGId);
        }
    }
    // Local Storage functions

  async storeGroupCounter(tc: number){
    await Storage.set({
      key: 'groupCounter',
      value: tc.toString()
    });
  }
  async readGroupCounter(){
    const {value} = await Storage.get({key: 'groupCounter'});
    this.lastGId = Number.parseInt(value);
    console.log("id value: " + value);
    if (value == "NaN") {
        this.lastGId = 1;
        console.log("id: " + this.lastGId);
    }
    console.log("id: " + this.lastGId);
  }

  async storeGroup(){
      console.log("Guardando: " + JSON.stringify(this.groups));
    await Storage.set({
      key: 'groups',
      value: JSON.stringify(this.groups)
    });
  }
  async readGroups(){
    const ret = await Storage.get({key: 'groups'});
    console.log(JSON.parse(ret.value));
    this.groups = JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }
}
