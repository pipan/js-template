import { Module } from '@wildebeest/js-modules';
import { Container } from 'inversify';

export class TemplateModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void {}

    boot(container: Container): void {}
}